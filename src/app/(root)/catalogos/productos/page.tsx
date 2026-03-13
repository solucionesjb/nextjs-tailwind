'use client'
import { useEffect, useState } from 'react';
import { GetProductosAction, SetProductosAction } from "@/actions/productos-action"
import { ProductoModel } from '@/models/producto-model';

export default function CatalogoProductos() {
    const [data, setData] = useState<ProductoModel[]>([]);

    useEffect(() => {
        const getProductos = async () => {
            const response = await GetProductosAction()
            setData(response);
        }

        getProductos();
    }, []);

    async function handleOnClick() {
        const producto: ProductoModel = {
            name: 'Producto',
            price: 100.00
        }
        await SetProductosAction(producto);
    }

    if (!data) {
        return (<button onClick={handleOnClick}>Agregar</button>)
    }

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Productos</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Descripción</th>
                            <th className="py-2 px-4 border-b">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b text-center">{item.id}</td>
                                <td className="py-2 px-4 border-b">{item.name}</td>
                                <td className="py-2 px-4 border-b">{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={handleOnClick}>Agregar</button>
        </div>
    );
}
