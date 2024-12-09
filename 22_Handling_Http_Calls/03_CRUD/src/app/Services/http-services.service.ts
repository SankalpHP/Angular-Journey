import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  url: string = 'http://localhost:4000/products'; // Backend endpoint

  constructor(private http: HttpClient) {}

  // Get all products
  getProduct() {
    return this.http.get(this.url);
  }

  // Save a new product
  saveProduct(formData: any, callback: (message: string) => void): void {
    this.http.post(this.url, formData).subscribe({
      next: (response) => {
        console.log('Response:', response);
        callback("Product added successfully!");
      },
      error: (error) => {
        console.error('Error:', error);
        callback("Something went wrong while adding the product!");
      }
    });
  }

  // Update a product
  updateProduct(rowData: any, callback: (message: string) => void): void {
    const updateUrl = `${this.url}/${rowData.id}`;
    this.http.put(updateUrl, rowData).subscribe({
      next: (response) => {
        console.log('Response:', response);
        callback("Product updated successfully!");
      },
      error: (error) => {
        console.error('Error:', error);
        callback("Something went wrong while updating the product!");
      }
    });
  }

  // Delete a product
  deleteProduct(id: any, callback: (message: string) => void): void {
    const deleteUrl = `${this.url}/${id}`;
    this.http.delete(deleteUrl).subscribe({
      next: () => {
        callback("Product deleted successfully!");
      },
      error: (error) => {
        console.error('Error:', error);
        callback("Something went wrong while deleting the product!");
      }
    });
  }
}
