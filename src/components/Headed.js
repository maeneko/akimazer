import React from "react"
import {Helmet} from "react-helmet";
let JsonData = require('../config.json');
export default class Headed extends React.Component {
    render() {
        return <>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta name="robots" content="all"/>
                <meta name="viewport" content="width=960"></meta>
                <meta name="description" content="Jazzer Anarxi"/>
                <meta name="keywords" content="Jazzer Anarxi донат, Jazzer Anarxi donate, Jazzer Anarxi купить донат, Jazzer Anarxi сервер, Jazzer Anarxi ip"/>
                <title>{JsonData.NameServer}</title>
            </Helmet>
        </>
    }
}