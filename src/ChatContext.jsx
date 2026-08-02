import React, { createContext, useContext, useState } from 'react';

export const CONTACTS = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    role: 'Plomero Maestro',
    rating: 4.8,
    verified: true,
    online: true,
    lastMessage: 'Escribiendo...',
    lastMessageTime: '15m',
    unread: 0,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqVsQ35Ycyn_w4gVX23TJe1fEuxf1wRPTIe0xKIwDoQCQ-gafy3J5GG9gg9h0g86K87xeVnUwLnJNo958z9VUQNNrYsUvcEY7In8etZM3Wv3c8CjtWh5q9VVFGDxFkXM4mQHbgRFOknJQb5dWq-qFmQ1dTGAvai3Kl3mqSGtvx1YRns-pvJp5VOtrIg6pGMC94wMba8zUfOKoXSgMjg_3Tg1T455rQ0uPctiRH-0vmutnF6lbsySZG',
    chatAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIVF9CUyUevVGFnxM7DqRDLOBI3OYVmYDEpK72lWq29KgLCyLnBKuCviPGPz_YMQT4nOPZcm2Xxu6AjqLtISlVSlWF74Jwt0sXTDymlHmNYbZpWbL7VNw-l5L_n5MskbEbh4SSPKoFBoULXv9Sjuqw7kIwM-Q_Oe1gtxvCJP6EdwRS2j3El-fkkqs2axHYiRuQKj8ezbAuntndkmwuwqYPo-PMdNuEHzoMvFvXdmiac3fK7b9PMXGO',
    thumbAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaKh2EPhqbbXszCo3tz-YsB3iSWureFX-s4tyJeGl0EZG37ek1M7NLzSj3PFqBisggapM5hNt81ni-AfUfi-CZA_gNhV4HtTyJiyy_4GHV-Xx9WdWslt0PBFulB67Tg3cowmVcH8HizE4O1-U7-vbhtabwgAXT9c6o5fVhIxG5YUyusM8Ae-wB2gsl2eG_EKGd1_u3cu3RFthXrxGSUApTE6EMBkBv3UzUoiRaWtsCm5iKnFRwJBKR',
    messages: [
      { from: 'expert', text: 'Hola Carlos, ya estoy en camino a tu domicilio. Debería llegar en 15 minutos.', time: '09:42 AM' },
      { from: 'user', text: 'Perfecto Carlos, te espero. La fuga está en el baño del segundo piso.', time: '09:44 AM' },
    ],
  },
  {
    id: 2,
    name: 'Maria Gonzalez',
    role: 'Consultora de Diseño',
    rating: 4.9,
    verified: false,
    online: false,
    lastMessage: 'Los acabados de mármol están...',
    lastMessageTime: '',
    unread: 2,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq9WYt8jK1emzhm8D3T1SfxyLcByb23oIrgIV5cgVcRdpS1At8Agunq9OvTXj8JHyOxEp1nS67V9rbtA0RZnS8yFnOGudIfSwpNYuPTLjaj2753PPP63O_vK5pjm1jb8AsWd4INDqDoSJ8eCgNLmVs0ILxAUF34oqDH6PO-5W8PfE-8Pt5Fn3zzbSThNMLr70-E5W-TdjAphc7WaMRGkRyOxkHd6dl00VkjpS1M9C7QmTlAoYItRlh',
    chatAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq9WYt8jK1emzhm8D3T1SfxyLcByb23oIrgIV5cgVcRdpS1At8Agunq9OvTXj8JHyOxEp1nS67V9rbtA0RZnS8yFnOGudIfSwpNYuPTLjaj2753PPP63O_vK5pjm1jb8AsWd4INDqDoSJ8eCgNLmVs0ILxAUF34oqDH6PO-5W8PfE-8Pt5Fn3zzbSThNMLr70-E5W-TdjAphc7WaMRGkRyOxkHd6dl00VkjpS1M9C7QmTlAoYItRlh',
    thumbAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq9WYt8jK1emzhm8D3T1SfxyLcByb23oIrgIV5cgVcRdpS1At8Agunq9OvTXj8JHyOxEp1nS67V9rbtA0RZnS8yFnOGudIfSwpNYuPTLjaj2753PPP63O_vK5pjm1jb8AsWd4INDqDoSJ8eCgNLmVs0ILxAUF34oqDH6PO-5W8PfE-8Pt5Fn3zzbSThNMLr70-E5W-TdjAphc7WaMRGkRyOxkHd6dl00VkjpS1M9C7QmTlAoYItRlh',
    messages: [
      { from: 'expert', text: 'Los acabados de mármol están confirmados para el jueves.', time: '11:20 AM' },
    ],
  },
  {
    id: 3,
    name: 'Roberto Silva',
    role: 'Ingeniero Eléctrico',
    rating: 4.7,
    verified: false,
    online: true,
    lastMessage: 'Cualquier duda con la red...',
    lastMessageTime: 'Ayer',
    unread: 0,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU8Qu1jmZSHJnSd9dJw8tpRJ3x9lTXawh2Qbza6TY_Zwny-uWGeKYSAbUm_lxPSvWqoNLXP7dDowXb6gurh318nS8Xa0NLNIfklcNuwOCcE54_tFctm4kU6H5pFBE_2Pxd6wGYNSGTASnu8qzF76VUVtVyfUT6x73kXQIJpvLdROSe8Cyr0Uc3dmwG5_pnGHT4A7jAC0Bq-4qo0uy_CqlLU-nAxf1vwyjYrDLnOI_p4Nzof7pgOBT5',
    chatAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU8Qu1jmZSHJnSd9dJw8tpRJ3x9lTXawh2Qbza6TY_Zwny-uWGeKYSAbUm_lxPSvWqoNLXP7dDowXb6gurh318nS8Xa0NLNIfklcNuwOCcE54_tFctm4kU6H5pFBE_2Pxd6wGYNSGTASnu8qzF76VUVtVyfUT6x73kXQIJpvLdROSe8Cyr0Uc3dmwG5_pnGHT4A7jAC0Bq-4qo0uy_CqlLU-nAxf1vwyjYrDLnOI_p4Nzof7pgOBT5',
    thumbAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU8Qu1jmZSHJnSd9dJw8tpRJ3x9lTXawh2Qbza6TY_Zwny-uWGeKYSAbUm_lxPSvWqoNLXP7dDowXb6gurh318nS8Xa0NLNIfklcNuwOCcE54_tFctm4kU6H5pFBE_2Pxd6wGYNSGTASnu8qzF76VUVtVyfUT6x73kXQIJpvLdROSe8Cyr0Uc3dmwG5_pnGHT4A7jAC0Bq-4qo0uy_CqlLU-nAxf1vwyjYrDLnOI_p4Nzof7pgOBT5',
    messages: [
      { from: 'expert', text: 'Cualquier duda con la red eléctrica, avísame.', time: 'Ayer' },
    ],
  },
];

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [selectedContactId, setSelectedContactId] = useState(CONTACTS[0].id);

  const selectedContact = CONTACTS.find((c) => c.id === selectedContactId) || CONTACTS[0];

  return (
    <ChatContext.Provider value={{ contacts: CONTACTS, selectedContact, selectedContactId, setSelectedContactId }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat debe usarse dentro de un ChatProvider');
  return ctx;
}