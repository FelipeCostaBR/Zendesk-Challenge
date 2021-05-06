import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import api from '../../services/api';
import { Container, HeaderModal } from './styles';

interface Ticket {
    id: number;
    requester_id: number;
    status: string;
    subject: string;
    description: string;
    request_dt: string;
}

interface TicketModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    data?: Ticket;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onRequestClose, data: ticket }) => {
    const [requesterName, setRequesterName] = useState('');

    useEffect(() => {
        const fetchUsers = async (): Promise<void> => {
            const response = await api.get(`/users/${ticket?.requester_id}`);
            const { requester } = response.data;

            setRequesterName(requester);
        };

        fetchUsers();
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="close modal" />
            </button>

            <Container>
                <h2>Ticket Details</h2>
                <HeaderModal>
                    <p>
                        Requester: <span>{requesterName}</span>
                    </p>
                    <p>
                        Subject: <span>{ticket?.subject}</span>{' '}
                    </p>
                </HeaderModal>

                <p>{ticket?.description}</p>
            </Container>
        </Modal>
    );
};

export default TicketModal;
