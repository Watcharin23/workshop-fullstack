import React, { useEffect, useState } from "react";
import BackOffice from "../../components/BackOffice";
import MyModal from "../../components/MyModal";
import Swal from "sweetalert2";
import axios from "axios";
import config from "../../config";

function Product() {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = async () => {
        try {
            // ตรวจสอบและแปลงค่าที่จำเป็น
            product.img = "";
            product.price = parseInt(product.price);
            product.cost = parseInt(product.cost);

            // ส่งข้อมูลไปยัง API
            const res = await axios.post(
                config.apiPath + "/product/create",
                product,
                config.headers()
            );

            // แสดงผลลัพธ์
            if (res.data.result === "success") {
                Swal.fire({
                    title: "Success",
                    text: "บันทึกข้อมูลสำเร็จ",
                    icon: "success",
                });
                document.getElementById('modalProduct_btnclose').click();
                fetchData();
            }
        } catch (e) {
            Swal.fire({
                title: "Error",
                text: e.message || "Something went wrong!",
                icon: "error",
            });
        }
    };

    const fetchData = async () => {
        try {
            const res = await axios.get(config.apiPath + '/product/list', config.headers());
            if (res.data.result !== undefined ) {
                setProducts(res.data.results);
            }
        } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })
        }
    }

    const clearform = () => {
        setProduct({
            name: '',
            price: '',
            cost: ''
        })
    }

    return (
        <BackOffice>
            <div className="">Product</div>
            <button
                onClick={clearform}
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#modalProduct"
            >
                <i className="fa fa-plus"></i> เพิ่มรายการ
            </button>

            <MyModal id="modalProduct" title="สินค้า">
                <div>
                    <div> ชื่อสินค้า </div>
                    <input
                        value={product.name}
                        className="form-control"
                        onChange={(e) =>
                            setProduct({ ...product, name: e.target.value })
                        }
                    />
                </div>
                <div className="mt-3">
                    <div> ราคาทุน </div>
                    <input
                        value={product.cost}
                        className="form-control"
                        onChange={(e) =>
                            setProduct({ ...product, cost: e.target.value })
                        }
                    />
                </div>
                <div className="mt-3">
                    <div> ราคาขาย </div>
                    <input
                        value={product.price}
                        className="form-control"
                        onChange={(e) =>
                            setProduct({ ...product, price: e.target.value })
                        }
                    />
                </div>
                <div className="mt-3">
                    <div> ภาพสินค้า </div>
                    <input type="file" className="form-control" />
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary" onClick={handleSave}>
                        <i className="fa fa-save"></i> บันทึก
                    </button>
                </div>
            </MyModal>
        </BackOffice>
    );
}

export default Product;
