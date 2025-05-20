import React, { useState } from 'react';
import { IconPhoneCall, IconBrandWhatsapp } from '@tabler/icons-react';
import { EmergencyList } from '../data/EmergencyList'; // Sesuaikan path jika beda folder

const EmergencyContactsModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      {/* Floating Button for Emergency Contact */}
      <button
        onClick={toggleModal}
        className="btn btn-warning rounded-circle shadow position-fixed"
        style={{
          bottom: '100px',
          right: '30px',
          zIndex: 1050,
          opacity: 0.85,
          width: '60px',
          height: '60px',
        }}
        title="Kontak Darurat"
      >
        <IconPhoneCall size={30} className="text-white" />
      </button>

      {/* Modal Kontak Darurat */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-warning text-white">
                <h5 className="modal-title">Kontak Darurat!</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                {EmergencyList.map((contact, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2"
                  >
                    <div>
                      <strong>{contact.name}</strong>
                      <br />
                      <small>{contact.phone}</small>
                    </div>
                    <a
                      href={`https://wa.me/${contact.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success d-flex align-items-center"
                    >
                      <IconBrandWhatsapp size={20} className="me-2" />
                      Chat
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmergencyContactsModal;
