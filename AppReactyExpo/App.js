import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const API_CONFIG = {
    BASE_URL: 'https://gamebrain.co/api',
    API_KEY: '2813d4a7f5b647a2932d40f132c48e71'
};

export async function callGameBrain(endpoint, params = {}) {
    const queryParams = new URLSearchParams({
        ...params,
        'api-key': API_CONFIG.API_KEY
    });

    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}?${queryParams}`);
    return await response.json();
}