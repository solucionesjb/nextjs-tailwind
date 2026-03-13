'use server'
import { ProductoModel } from "@/models/producto-model";

export async function GetProductosAction() {
    const productosUrl = `${process.env.NEXT_PUBLIC_API_URL}products`;
    const requestOptions = { method: "GET" };

    try {
        const resp = await fetch(productosUrl, {
            ...requestOptions,
            cache: 'no-store'
        }).then(async (r) => await r.json());
        return resp;

    } catch (error) {
        console.log(error);
        return null;
    }

}

export async function SetProductosAction(producto: ProductoModel) {
    const productosUrl = `${process.env.NEXT_PUBLIC_API_URL}products`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = { method: "POST", headers: myHeaders, body: JSON.stringify(producto) };

    try {
        const resp = await fetch(productosUrl, {
            ...requestOptions,
            cache: 'no-store'
        }).then(r => r.json());
        return resp;

    } catch (error) {
        console.log(error);
        return null;
    }

}