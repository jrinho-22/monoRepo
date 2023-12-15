import { render, screen  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Login } from '../src/pages/auth/Auth'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'


describe('Authentication', ()=> {
    const setup = () => {
        const mockStore = configureStore();
        let store;
        store = mockStore();
        
        const utils = render(
            <Provider store={store}>
                <Login/>
            </Provider>
        )
        const signinButton = screen.getByText('sign In')
        const email = screen.getByPlaceholderText('Email');
        const password = screen.getByPlaceholderText('Password');
        return {
            signinButton,
            email,
            password,
          ...utils,
        }
    }
    test('Sign in button to be disabled', () =>  {
        const { signinButton} = setup()

        expect(signinButton).toBeDisabled()
    })

    test('Sign in button to be enabled after email and password are valid', async() =>  {
        const {email, password, signinButton} = setup()
        await userEvent.type(email, "user")
        await userEvent.type(password, "user123")

        expect(signinButton).toBeEnabled()
    })
})


