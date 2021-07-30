import React from 'react';

export default function () {
  return (
    <footer className="mt-auto py-8">
      <p className="text-gray-500 text-center leading-7">Powered by React</p>
      <p className="text-gray-500 text-center leading-7">
        Copyright © FE Laboratory {new Date().getFullYear()}
      </p>
    </footer>
  );
}
