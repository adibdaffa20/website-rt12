import React, { useState } from 'react';
import { beliList } from '../../data/BeliList.jsx';
import {
  IconEdit,
  IconTrash,
  IconPlus,
  IconChevronDown,
  IconChevronUp,
  IconX,
  IconCheck
} from '@tabler/icons-react';
import {
  Accordion,
  Card,
  Button,
  Form,
  Row,
  Col,
  Modal,
  Alert,
  Container
} from 'react-bootstrap';

function Produk() {
  const [products, setProducts] = useState(beliList);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    id_penjual: 1,
    image: "",
    name: "",
    harga: "",
    description: "",
    kategori: "sembako",
    jumlah: 0,
    penjual: "Toko Saya",
    whatsapp: "081234567890"
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    let imageUrl = formData.image;
    if (selectedFile) {

      imageUrl = URL.createObjectURL(selectedFile);
    }

    const productData = {
      ...formData,
      image: imageUrl
    };

    if (isEditing) {
      setProducts(products.map(p => p.id === formData.id ? productData : p));
      setAlertMessage('Produk berhasil diperbarui!');
    } else {
      setProducts([...products, productData]);
      setAlertMessage('Produk berhasil ditambahkan!');
      setFormData({
        ...formData,
        id: formData.id + 1,
        name: "",
        harga: "",
        description: "",
        kategori: "sembako",
        jumlah: 0,
        image: ""
      });
    }

    setSelectedFile(null);
    setPreviewImage("");
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 3000);
    setShowForm(false);
    setIsEditing(false);
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter(p => p.id !== productToDelete.id));
    setShowDeleteModal(false);
    setAlertMessage('Produk berhasil dihapus!');
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 3000);
  };

  const resetForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setFormData({
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      id_penjual: 1,
      image: "",
      name: "",
      harga: "",
      description: "",
      kategori: "sembako",
      jumlah: 0,
      penjual: "Toko Saya",
      whatsapp: "081234567890"
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);


      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);


      setFormData({
        ...formData,
        image: file.name
      });
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Kelola Produk UMKM</h2>

      {showSuccessAlert && (
        <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}

      <Accordion activeKey={showForm ? "0" : null}>
        <Card className="mb-4">
          <Card.Header className="p-0">
            <Accordion.Button
              as={Button}
              variant="link"
              eventKey="0"
              onClick={() => setShowForm(!showForm)}
              className="d-flex justify-content-between align-items-center w-100 text-decoration-none p-3"
            >
              <span className="h5 mb-0">
                {isEditing ? 'Edit Produk' : 'Tambah Produk Baru'}
              </span>
              {showForm ? <IconChevronUp /> : <IconChevronDown />}
            </Accordion.Button>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nama Produk</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Harga</Form.Label>
                      <Form.Control
                        type="text"
                        name="harga"
                        value={formData.harga}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Deskripsi Produk</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Kategori</Form.Label>
                      <Form.Select
                        name="kategori"
                        value={formData.kategori}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="sembako">Sembako</option>
                        <option value="obat">Obat</option>
                        <option value="kue">Kue</option>
                        <option value="minuman">Minuman</option>
                        <option value="lainnya">Lainnya</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Jumlah Stok</Form.Label>
                      <Form.Control
                        type="number"
                        name="jumlah"
                        value={formData.jumlah}
                        onChange={handleInputChange}
                        required
                        min="0"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Gambar Produk</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mb-2"
                  />
                  {previewImage && (
                    <div className="mt-2">
                      <img
                        src={previewImage}
                        alt="Preview"
                        style={{
                          maxWidth: '200px',
                          maxHeight: '200px',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  )}
                  {isEditing && !previewImage && formData.image && (
                    <div className="mt-2">
                      <p>Gambar saat ini:</p>
                      <img
                        src={formData.image}
                        alt="Current"
                        style={{
                          maxWidth: '200px',
                          maxHeight: '200px',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  )}
                </Form.Group>

                <div className="d-flex justify-content-end gap-2">
                  <Button variant="outline-secondary" onClick={resetForm}>
                    <IconX size={18} className="me-1" /> Batal
                  </Button>
                  <Button variant="primary" type="submit">
                    <IconCheck size={18} className="me-1" /> {isEditing ? 'Simpan Perubahan' : 'Tambah Produk'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <Card className="h-100 shadow-sm">
              {product.image && (
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <Card.Title className="mb-0">{product.name}</Card.Title>
                  <span className="badge bg-primary">{product.kategori}</span>
                </div>
                <Card.Text className="text-muted small mb-2">
                  {product.description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="h5 text-primary">Rp {product.harga}</span>
                  <span className="text-muted">Stok: {product.jumlah}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => window.open(`https://wa.me/${product.whatsapp}?text=Saya%20ingin%20membeli%20${product.name}`, '_blank')}
                  >
                    Beli via WhatsApp
                  </Button>
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-info"
                      size="sm"
                      onClick={() => handleEdit(product)}
                    >
                      <IconEdit size={16} />
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDeleteClick(product)}
                    >
                      <IconTrash size={16} />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-5">
          <img
            src="/img/empty-state.png"
            alt="No products"
            style={{ maxWidth: '300px', opacity: 0.7 }}
            className="mb-4"
          />
          <h5>Belum ada produk</h5>
          <p className="text-muted">Tambahkan produk pertama Anda dengan menekan tombol di atas</p>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Hapus Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah Anda yakin ingin menghapus produk <strong>{productToDelete?.name}</strong>?
          Aksi ini tidak dapat dibatalkan.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Batal
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Produk;