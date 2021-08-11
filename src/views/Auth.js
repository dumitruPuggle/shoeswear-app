import React from 'react'
import { useTranslation } from 'react-i18next'
import { Formik, Field, Form } from "formik"
import {Card} from '@blueprintjs/core'
import Button from '@material-ui/core/Button'
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";
import Routes from '../components/NavigationBar/routes.json'
export default function Auth() {
    let { path } = useRouteMatch();
    const layoutVertical = {
        display: 'flex',
        flexDirection: 'column'
    }
    return(
        <div style={{...layoutVertical, alignItems: 'center', justifyContent: 'center', paddingTop: 50, paddingBottom: 100}}>
            <Switch>
                <Route exact path={path}>
                    <LoginForm />
                </Route>
                <Route exact path={`${path}/create-new-account`}>
                    <CreateAccount />
                </Route>
                <Route path={`${path}/*`}>
                    <div>
                        Not found
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

function LoginForm(){
    const { t } = useTranslation();
    let { path } = useRouteMatch();
    const layoutVertical = {
        display: 'flex',
        flexDirection: 'column'
    }
    const fieldStyle = {
        backgroundColor: 'rgb(0, 0, 0, 0.03)',
        border: '1px solid rgb(0, 0, 0, 0.03)',
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        outline: 'none'
    }
    return(
        <Formik
            initialValues={{ email: "", pwd: "" }}
            onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}>
            <Form>
                <Card style={{...layoutVertical, fontFamily: 'Roboto', width: 500, borderRadius: 20, padding: 30}}>
                    <h1 style={{fontFamily: 'Libre Baskerville', fontWeight: 700}}>{t('logInTitle')}</h1>
                    <p style={{marginBottom: 20}}>
                    Bine ați revenit către Shoeswear, intrați în contul dumneavoastă existent, pentru
                    a beneficia de discounturi și pentru a salva toate achizițiile.
                    </p>
                    <Field style={{...fieldStyle, marginBottom: 10}} placeholder={t('email')} name="email" type="email" />
                    <Field style={{...fieldStyle, marginBottom: 15}} placeholder={t('password')} name="pwd" type="password" />
                    <div style={{...layoutVertical, alignItems: 'center'}}> 
                        <img alt={"privacy-policy-icon"} style={{width: 32, marginBottom: 5}} src={'https://i.reincubate.com/l/data-privacy-icon.png'}/>
                        <p style={{color: '#BEC3C9'}}>{t('confidentialNote')} <NavLink style={{color: '#1877F2'}} to={Routes.other.privacyPolicy}>{t('confidentialPolicy')}</NavLink></p>
                    </div>
                    <Button style={{padding: 10, borderRadius: 10, backgroundColor: '#ECF3FF', color: '#1877F2', marginTop: 20, marginBottom: 10}} type="submit">{t('connect')}</Button>
                    <NavLink style={{width: '100%', textDecoration: 'none'}} to={path + Routes.other.signUp}><Button style={{color: '#CCCCCC', width: '100%'}}>{t('dontHaveAnAccount')}</Button></NavLink>
                </Card>
            </Form>
        </Formik>
    )
}

function CreateAccount(){
    const { t } = useTranslation();
    const layoutVertical = {
        display: 'flex',
        flexDirection: 'column'
    }
    const fieldStyle = {
        backgroundColor: 'rgb(0, 0, 0, 0.03)',
        border: '1px solid rgb(0, 0, 0, 0.03)',
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        outline: 'none'
    }
    return(
        <Formik
            initialValues={{ name: "", surname: "", age: "", email: "", phone: "", address: "", pwd: "" }}
            onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}>
            <Form>
                <Card style={{...layoutVertical, fontFamily: 'Roboto', width: 500, borderRadius: 20, padding: 30}}>
                    <h1 style={{fontFamily: 'Libre Baskerville', fontWeight: 700}}>{t('signUpTitle')}</h1>
                    <p style={{marginBottom: 20}}>
                    Bine ați revenit către Shoeswear, intrați în contul dumneavoastă existent, pentru
                    a beneficia de discounturi și pentru a salva toate achizițiile.
                    </p>
                    <Field style={{...fieldStyle, marginBottom: 10}} placeholder={t('name')} name="name" type="text" />
                    <Field style={{...fieldStyle, marginBottom: 10}} placeholder={t('surname')} name="surname" type="text" />
                    <Field style={{...fieldStyle, marginBottom: 10}} placeholder={t('age')} name="age" type="number" />
                    <Field style={{...fieldStyle, marginBottom: 10}} placeholder={t('email')} name="email" type="email" />
                    <Field style={{...fieldStyle, marginBottom: 10}} placeholder={t('phone')} name="phone" type="number" />
                    <Field style={{...fieldStyle, marginBottom: 10}} placeholder={t('address')} name="address" type="text" />
                    <Field style={{...fieldStyle, marginBottom: 15}} placeholder={t('password')} name="pwd" type="password" />
                    <div style={{...layoutVertical, alignItems: 'center'}}> 
                        <img alt={"privacy-policy-icon"} style={{width: 32, marginBottom: 5}} src={'https://i.reincubate.com/l/data-privacy-icon.png'}/>
                        <p style={{color: '#BEC3C9'}}>{t('confidentialNote')} <NavLink style={{color: '#1877F2'}} to={Routes.other.privacyPolicy}>{t('confidentialPolicy')}</NavLink></p>
                    </div>
                    <Button style={{padding: 10, borderRadius: 10, backgroundColor: '#ECF3FF', color: '#1877F2', marginTop: 20, marginBottom: 10}} type="submit">{t('createAccount')}</Button>
                    <NavLink style={{width: '100%', textDecoration: 'none'}} to={Routes.other.signIn}><Button style={{color: '#CCCCCC', width: '100%'}}>{t('haveAlreadyAnAccount')}</Button></NavLink>
                </Card>
            </Form>
        </Formik>
    )
}