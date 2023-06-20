const express = require('express');
const routes = express.Router();

//PRODUCTOS
routes.get('/productos',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Productos',(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})

routes.get('/productos/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Productos WHERE ID_Producto = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})



routes.post('/productos/add',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO Productos set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Producto Agregado');
        })
    })
})

routes.put('/productos/update/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE Productos set ? WHERE ID_Producto = ?',[req.body, req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Producto Actulizado');
        })
    })
})

routes.delete('/productos/delete/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM Productos WHERE ID_Producto = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Producto Eliminado');
        })
    })
})



//PEDIDOS

routes.get('/pedidos',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Pedidos',(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})


routes.get('/pedidos/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Pedidos WHERE ID_Pedido = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})


routes.post('/pedidos/add',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO Pedidos set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Pedido Agregado');
        })
    })
})

routes.put('/pedidos/update/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE Pedidos set ? WHERE ID_Pedido = ?',[req.body, req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Pedido Actulizado');
        })
    })
})

routes.delete('/pedidos/delete/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM Pedidos WHERE ID_Pedido = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Pedido cancelado');
        })
    })
})


//CLIENTE

routes.get('/clientes',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Clientes',(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})

routes.get('/clientes/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Clientes WHERE ID_Cliente = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})



routes.post('/clientes/add',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO Clientes set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Se registro Cliente');
        })
    })
})

routes.put('/clientes/update/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE Clientes set ? WHERE ID_Cliente = ?',[req.body, req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Producto Actulizado');
        })
    })
})

routes.delete('/clientes/delete/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM Clientes WHERE ID_Cliente = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Cliente Eliminado');
        })
    })
})

//DETALLE PEDIDO

routes.get('/detalle-pedido',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Detalle_Pedido',(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})

routes.get('/detalle-pedido/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Detalle_Pedido WHERE ID_Detalle = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})


routes.post('/detalle-pedido/add',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO Detalle_Pedido set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Se registro Detalle_Pedido');
        })
    })
})

routes.put('/detalle-pedido/update/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE Detalle_Pedido set ? WHERE ID_Detalle = ?',[req.body, req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Detalle_Pedido Actulizado');
        })
    })
})

routes.delete('/detalle-pedido/delete/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM Detalle_Pedido WHERE ID_Detalle = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Detalle_Pedido Eliminado');
        })
    })
})

//ENVIO


routes.get('/envios',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Envios',(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})

routes.get('/envios/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Envios WHERE ID_Envio = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows);
        })
    })
})


routes.post('/envios/add',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO Envios set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Se registro Envio');
        })
    })
})

routes.put('/envios/update/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE Envios set ? WHERE ID_Envio = ?',[req.body, req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Envio Actulizado');
        })
    })
})

routes.delete('/envios/delete/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM Envios WHERE ID_Envio = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Envio Eliminado');
        })
    })
})








module.exports = routes;