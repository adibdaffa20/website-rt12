import React from 'react';
import {
  IconBox,
  IconCoin,
  IconBuildingStore,
  IconUser,
  IconShoppingCart,
  IconChartBar,
  IconEdit
} from '@tabler/icons-react';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  ProgressBar,
  Button
} from 'react-bootstrap';


const profileData = {
  nama_toko: "Toko Jaya",
  pemilik: "Budi Santoso",
  status: "Aktif",

};
 
const produkData = [
  { id: 1, nama: "Beras Premium", stok: 45, harga: "Rp 12.000" },
  { id: 2, nama: "Minyak Goreng", stok: 28, harga: "Rp 25.000" },
  { id: 3, nama: "Gula Pasir", stok: 15, harga: "Rp 10.000" },
  { id: 4, nama: "Telur Ayam", stok: 32, harga: "Rp 2.500" }
];

function Dashboard() {
  return (
    <Container className="py-4">
      <h2 className="mb-4">
        <IconChartBar className="me-2" />
        Dashboard UMKM
      </h2>

     
      <Row>
        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Header className="bg-white d-flex justify-content-between align-items-center py-3">
              <h5 className="mb-0">
                <IconBox className="me-2" />
                Produk
              </h5>

            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-hover mb-0 text-center">
                  <thead>
                    <tr>
                      <th>Produk</th>
                      <th>Harga</th>
                      <th>Stok</th>
                    </tr>
                  </thead>
                  <tbody>
                    {produkData.map((produk) => (
                      <tr key={produk.id}>
                        <td>
                          <strong>{produk.nama}</strong>
                        </td>
                        <td>{produk.harga}</td>
                        <td>{produk.stok}</td>


                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-white d-flex justify-content-between align-items-center py-3">
              <h5 className="mb-0">
                <IconUser className="me-2" />
                Profil Toko
              </h5>

            </Card.Header>
            <Card.Body>
              <div className="text-center mb-4">
                <div className="bg-light rounded-circle p-3 d-inline-block mb-2">
                  <IconBuildingStore size={40} className="text-primary" />
                </div>
                <h4>{profileData.nama_toko}</h4>
                <p className="text-muted">{profileData.pemilik}</p>
              </div>

              <div className="border-top pt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Status:</span>
                  <Badge bg="success">{profileData.status}</Badge>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;