import fetch from 'isomorphic-unfetch';
import React from 'react';

async function fetchMembers() {
    const res = await fetch('https://api.clashroyale.com/v1/clans/%238RGPJUPU/members', {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjkxMmIxZWY5LWJmZDAtNGQ3ZC05MzQ3LWUxNGY5YjY0NjQ5OCIsImlhdCI6MTU4MDc0NDc0MCwic3ViIjoiZGV2ZWxvcGVyL2ZiZDBjZTlkLTRiZjctNjBmNi0xNjI3LWU1NmEzZWZjMGEwYSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMTIuMTE1LjI0Ni42IiwiMjEyLjExNS4yNDcuMjM2Il0sInR5cGUiOiJjbGllbnQifV19.snNEXxhrKA-PqE2HHfMlpkfxYg2PxsYUWISwzK5gAC5hW27D70TDcuu4M68gqMVp42qtomnncWm8uaLbaP2pcA'
        }
    });
    const json = await res.json();

    return json;
}

export default async function ClientMembers() {
    const members = await fetchMembers();
    console.debug('>>>>> Members -> ' + members.items.length)

    return members;
}