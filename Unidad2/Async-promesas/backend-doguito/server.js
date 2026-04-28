import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./conexion.js"
dotenv.config();
const app=express();//llamadas a express en variable
app.use(cors());//uso con cors
app.use(express.json());//uso de archivos json
//get
app.get("/clientes", async(req,res)=>{
    try{
        const [rows]=await pool.query("SELECT * FROM clientes");
        res.json(rows);
    }catch (err){
        res.status(500).json({error: err.message});
    }
})
//get por id
app.get("/clientes/:id",async(req,res)=>{
    try{
        const [rows]= await pool.query(
            "SELECT FROM clientes WHERE id=?",[req.params.id])
            //verificacion de que existe cliente
    }catch(err){res.status(500).json({error:err.message})}
})
app.post("/clientes",async (req,res)=>{
    try{
        const {id,nombre,email} = req.body;
        await pool.query("INSERT INTO clientes (id,nombre,email) VALUES (?,?,?)",[id,nombre,email]);
        res.json({message: "Cliente agregado"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
} )
//put
app.put("/clientes/:id", async (req,res)=>{
    try{
        const {nombre,email} = req.body;
        await pool.query("UPDATE clientes SET nombre=?, email=? WHERE id=?", [nombre,email,req.params.id]);
        res.json({message: "Cliente actualizado"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
})
//delete
app.delete("/clientes/:id", async (req,res)=>{
    try{
        await pool.query("DELETE FROM clientes WHERE id=?", [req.params.id]);
        res.json({message: "Cliente eliminado"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});
app.listen(process.env.PORT,()=>{
    console.log("server corriendo en puerto ${process.env.PORT}");
});