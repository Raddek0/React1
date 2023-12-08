import React from 'react';

const FacultyDesc=()=>{
    return (
        <h2>Progamowanie</h2>
    );
}

function Faculty()
{
    return (
        <h1>Technik programista</h1>
    );
}

export function FacultyD(){
    return (
        <FacultyDesc/>
    );
}

export function FacultyH(){
    return (
        <Faculty/>
    );
}