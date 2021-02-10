import React from 'react';
import { render } from 'react-dom';

async Fetchinginfo() {
    const url="http://localhost:3000/users";
    const response=await fetch(url);
}

render