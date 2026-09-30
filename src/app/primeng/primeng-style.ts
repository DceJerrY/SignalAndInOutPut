import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const primengStyle = definePreset(Aura, {
    semantic: {
          primary: {
            50: '#3da5f4',
            100: '#cfe2ff',
            200: '#9ec5fe',
            300: '#6ea8fe',
            400: '#3da5f4',
            500: '#0d6efd', // Tu color base principal
            600: '#0b5ed7', // Hover
            700: '#0a53be', // Focus / Active
            800: '#084298',
            900: '#052c65',
            950: '#031633'
        },
        danger:{
            50: '{red.50}',
            100: '{red.100}',
            200: '{red.200}',
            300: '{red.300}',
            400: '{red.400}',
            500: '{red.500}',
            600: '{red.600}',
            700: '{red.700}',
            800: '{red.800}',
            900: '{red.900}',
            950: '{red.950}'
        },
        success:{
            50: '{lime.50}',
            100: '{lime.100}',
            200: '{lime.200}', 
            300: '{lime.300}',
            400: '{lime.400}', 
            500: '{lime.500}', 
            600: '{lime.600}', 
            700: '{lime.700}', 
            800: '{lime.800}', 
            900: '{lime.900}', 
            950: '{lime.950}'
        }
    }
});

export default primengStyle;
