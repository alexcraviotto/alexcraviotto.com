"use server"

import { encode as base64encode } from 'base-64';

export async function getCurrentListening() {
    try {
        const accessToken = await refreshAccessToken();

        const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (res.status === 204) {
            return null;
        }

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching current listening:', error);
        return null;
    }
}

async function refreshAccessToken() {
    const basic = base64encode(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: `${process.env.SPOTIFY_REFRESH_TOKEN}`,
        }),
    });

    const data = await response.json();
    return data.access_token;
}

