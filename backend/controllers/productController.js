const products = [
    { id: 1, name: "Road Bike", price: 799.99, category: "Bicycles", stock: 10 },
    { id: 2, name: "Mountain Bike", price: 999.99, category: "Bicycles", stock: 5 },
    { id: 3, name: "Cycling Helmet", price: 49.99, category: "Accessories", stock: 20 }
];

const getProducts = (req, res) => {
    res.status(200).json(products);
};

const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
};

const addProduct = (req, res) => {
    const { name, price, category, stock } = req.body;

    if (!name || !price || !category || !stock) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        category,
        stock
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price, category, stock } = req.body;

    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    if (name) products[productIndex].name = name;
    if (price) products[productIndex].price = price;
    if (category) products[productIndex].category = category;
    if (stock !== undefined) products[productIndex].stock = stock;

    res.status(200).json(products[productIndex]);
};

module.exports = { getProducts, getProductById, addProduct, updateProduct };
