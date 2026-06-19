import { io } from 'socket.io-client';

export const socket = io('http://127.0.0.1:8080', {
  autoConnect: false,
});

socket.on('connect', () => {
  console.log('[Socket] Uplink established with server.');
});

socket.on('disconnect', () => {
  console.log('[Socket] Connection lost or intentionally disconnected.');
});