import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { supabase } from './lib/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Test Connection
async function testConnection() {
  const { data, error } = await supabase.from('products').select('count', { count: 'exact', head: true });
  if (error) {
    console.error('❌ Supabase connection FAILED:', error.message);
  } else {
    console.log('✅ Connected to Supabase via SDK');
  }
}
testConnection();

// Products Routes
app.get('/api/products', async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true });
  
  if (error) return res.status(500).json({ error: error.message });
  
  const products = data.map(p => ({
    ...p,
    skinTypes: p.skin_types
  }));
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', req.params.id)
    .single();
  
  if (error) return res.status(404).json({ error: 'Not found' });
  res.json({ ...data, skinTypes: data.skin_types });
});

app.post('/api/products', async (req, res) => {
  const { name, price, description, image, category, stock, skinTypes, ingredients } = req.body;
  const id = Date.now().toString();
  
  console.log(`[SDK] Attempting to add product: ${name}`);
  
  const { data, error } = await supabase
    .from('products')
    .insert([
      { 
        id, 
        name, 
        price: parseFloat(price), 
        description, 
        image, 
        category, 
        stock: parseInt(stock), 
        skin_types: skinTypes, 
        ingredients 
      }
    ])
    .select()
    .single();
    
  if (error) {
    console.error('❌ SDK Error adding product:', error.message);
    console.error('Error Details:', error);
    return res.status(500).json({ error: error.message });
  }
  
  console.log('✅ Product added successfully via SDK');
  res.status(201).json({ ...data, skinTypes: data.skin_types });
});

app.put('/api/products/:id', async (req, res) => {
  const { name, price, description, image, category, stock, skinTypes, ingredients } = req.body;
  
  const { data, error } = await supabase
    .from('products')
    .update({ name, price, description, image, category, stock, skin_types: skinTypes, ingredients })
    .eq('id', req.params.id)
    .select()
    .single();
    
  if (error) return res.status(500).json({ error: error.message });
  res.json({ ...data, skinTypes: data.skin_types });
});

app.delete('/api/products/:id', async (req, res) => {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', req.params.id);
    
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Deleted' });
});

// Orders Routes
app.get('/api/orders', async (req, res) => {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) return res.status(500).json({ error: error.message });
  
  const orders = data.map(o => ({
    id: o.id,
    user: { name: o.customer_name, email: o.customer_email, address: o.customer_address },
    products: o.products,
    total: o.total,
    status: o.status,
    createdAt: o.created_at
  }));
  res.json(orders);
});

app.post('/api/orders', async (req, res) => {
  const { user, products, total } = req.body;
  const id = `ORD${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
  
  const { data, error } = await supabase
    .from('orders')
    .insert([
      { 
        id, 
        customer_name: user.name, 
        customer_email: user.email, 
        customer_address: user.address, 
        products, 
        total 
      }
    ])
    .select()
    .single();
    
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

app.put('/api/orders/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('orders')
    .update({ status: req.body.status })
    .eq('id', req.params.id)
    .select()
    .single();
    
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Users Routes
app.get('/api/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Reviews Routes
app.get('/api/reviews', async (req, res) => {
  const { data, error } = await supabase.from('reviews').select('*');
  if (error) return res.status(500).json({ error: error.message });
  
  const reviews = data.map(r => ({
    id: r.id,
    productId: r.product_id,
    user: r.user_name,
    rating: r.rating,
    comment: r.comment,
    status: r.status
  }));
  res.json(reviews);
});

app.put('/api/reviews/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('reviews')
    .update({ status: req.body.status })
    .eq('id', req.params.id)
    .select()
    .single();
    
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.delete('/api/reviews/:id', async (req, res) => {
  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', req.params.id);
    
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Deleted' });
});

// Discounts Routes
app.get('/api/discounts', async (req, res) => {
  const { data, error } = await supabase.from('discounts').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/api/discounts', async (req, res) => {
  const { code, percent, expiry } = req.body;
  const id = Date.now().toString();
  const { data, error } = await supabase
    .from('discounts')
    .insert([{ id, code, percent, expiry }])
    .select()
    .single();
    
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

app.delete('/api/discounts/:id', async (req, res) => {
  const { error } = await supabase
    .from('discounts')
    .delete()
    .eq('id', req.params.id);
    
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Deleted' });
});

// Banners Routes
app.get('/api/banners', async (req, res) => {
  const { data, error } = await supabase.from('banners').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.put('/api/banners', async (req, res) => {
  try {
    await supabase.from('banners').delete().neq('id', '0'); // clear all
    const { data, error } = await supabase
      .from('banners')
      .insert(req.body.map(b => ({
        id: b.id,
        title: b.title,
        subtitle: b.subtitle,
        image: b.image,
        active: b.active
      })))
      .select();
      
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
