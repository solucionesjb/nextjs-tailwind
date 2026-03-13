import { ProductoModel } from "@/models/producto-model"
import { NextResponse } from "next/server"

export async function GET() {
    // const productosString = localStorage.getItem('productos')
    // if (productosString) {
    //     const productos: ProductoModel[] = JSON.parse(productosString)
    //     return NextResponse.json(productos)
    // }

    return NextResponse.json([])
}

export async function POST(request: Request) {
    const producto: ProductoModel = await request.json()
    let productos: ProductoModel[] = []
    const productosString = localStorage.getItem('productos')
    if (productosString) {
        productos = JSON.parse(productosString)
    }

    productos.push(producto)
    localStorage.setItem('productos', JSON.stringify(productos))

    return NextResponse.next()
}