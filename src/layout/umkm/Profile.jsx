import React, { useState, useEffect } from 'react';
import { 
  IconEdit, 
  IconDeviceFloppy, 
  IconX, 
  IconMapPin, 
  IconPhone, 
  IconBuildingStore,
  IconUser
} from '@tabler/icons-react';
import { 
  Container, 
  Card, 
  Form, 
  Button, 
  Alert, 
  Row, 
  Col, 
  Badge 
} from 'react-bootstrap';


const initialData = {
  id: 1,
  nama_toko: "Toko Jaya",
  alamat: "Jl. Raya No. 1, Jakarta",
  no_telp: "081234567890",
  email: "toko.jaya@example.com",
  pemilik: "Budi Santoso",
  deskripsi: "Toko sembako lengkap dengan harga terjangkau"
};

function Profile() {
  const [profileData, setProfileData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [tempData, setTempData] = useState(initialData);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
  }, []);

  const handleEditClick = () => {
    setTempData(profileData);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData({
      ...tempData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setProfileData(tempData);
      setEditMode(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-white py-3 border-0">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">
                  <IconBuildingStore className="me-2" />
                  Profil UMKM
                </h4>
                {!editMode && (
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    onClick={handleEditClick}
                  >
                    <IconEdit size={18} className="me-1" /> Edit Profil
                  </Button>
                )}
              </div>
            </Card.Header>
            
            <Card.Body>
              {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                  Profil berhasil diperbarui!
                </Alert>
              )}
              
              {editMode ? (
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nama Toko</Form.Label>
                        <Form.Control
                          type="text"
                          name="nama_toko"
                          value={tempData.nama_toko}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nama Pemilik</Form.Label>
                        <Form.Control
                          type="text"
                          name="pemilik"
                          value={tempData.pemilik}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="alamat"
                      value={tempData.alamat}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nomor Telepon</Form.Label>
                        <Form.Control
                          type="tel"
                          name="no_telp"
                          value={tempData.no_telp}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={tempData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Deskripsi Toko</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="deskripsi"
                      value={tempData.deskripsi}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  
                  <div className="d-flex justify-content-end gap-2">
                    <Button 
                      variant="outline-secondary" 
                      onClick={handleCancel}
                      disabled={isLoading}
                    >
                      <IconX size={18} className="me-1" /> Batal
                    </Button>
                    <Button 
                      variant="primary" 
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Menyimpan...' : (
                        <>
                          <IconDeviceFloppy size={18} className="me-1" /> Simpan
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              ) : (
                <div className="profile-view">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-light rounded-circle p-3 me-3">
                      <IconBuildingStore size={40} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1">{profileData.nama_toko}</h3>
                      <Badge bg="light" text="dark" className="fw-normal">
                        UMKM Terdaftar
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="mb-3">Informasi Toko</h5>
                    <div className="ps-3">
                      <p className="d-flex align-items-center text-muted mb-2">
                        <IconUser size={18} className="me-2" />
                        <span className="me-2">Pemilik:</span>
                        <strong>{profileData.pemilik}</strong>
                      </p>
                      <p className="d-flex align-items-center text-muted mb-2">
                        <IconMapPin size={18} className="me-2" />
                        <span className="me-2">Alamat:</span>
                        <strong>{profileData.alamat}</strong>
                      </p>
                      <p className="d-flex align-items-center text-muted mb-2">
                        <IconPhone size={18} className="me-2" />
                        <span className="me-2">Telepon:</span>
                        <strong>{profileData.no_telp}</strong>
                      </p>
                      <p className="d-flex align-items-start text-muted mb-0">
                        <span className="me-2">Email:</span>
                        <strong>{profileData.email}</strong>
                      </p>
                    </div>
                  </div>
                  
                  {profileData.deskripsi && (
                    <div className="mb-4">
                      <h5 className="mb-3">Deskripsi</h5>
                      <div className="ps-3">
                        <p className="text-muted">{profileData.deskripsi}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;