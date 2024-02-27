import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos";

  constructor(private _httpclient: HttpClient) { }

  getProduto(id:any): Observable<Produto> {
    const urlAutalizar = `${this.url}?id=${id}`;
    return this._httpclient.get<Produto>(urlAutalizar);
  }
  getProdutos(): Observable<Produto[]> {
    return this._httpclient.get<Produto[]>(this.url);
  }
  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    return this._httpclient.post<Produto[]>(this.url, produto);
  }
  autalizarProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAutalizar = `${this.url}/${id}`;
    return this._httpclient.put<Produto[]>(urlAutalizar, produto);
  }
  removerProdutos(id: any): Observable<Produto[]> {
    const urlDeletar = `${this.url}/${id}`;
    return this._httpclient.delete<Produto[]>(urlDeletar);
  }

}
