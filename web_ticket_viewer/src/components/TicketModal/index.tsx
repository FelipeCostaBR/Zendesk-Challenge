import React, { useEffect } from 'react';
import Modal from 'react-modal';

import useTickets from '../../hooks/useTickets';

import closeImg from '../../assets/close.svg';
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
    const { setRequesterName, setCurrentPageUrl, requesterName } = useTickets();

    useEffect(() => {
        setRequesterName('');
        setCurrentPageUrl(`/users/${ticket?.requester_id}`);
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

            {requesterName ? (
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
            ) : (
                <h1> Loading...</h1>
            )}
        </Modal>
    );
};

export default TicketModal;
