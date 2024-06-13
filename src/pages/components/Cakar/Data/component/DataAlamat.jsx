import React, {useEffect, useState} from 'react'

// Components
import Inputs from '../../../../../components/Forms/Inputs';
import Button from '../../../../../components/Forms/Button';

const DataAlamat = () => {
    // Variable
    const [prov_id, inputNoHp] = useState('')
    const [kabkot_id, inputNoTelp] = useState('')
    const [kec_id, inputNoWa] = useState('')
    const [lurah_id, inputNoTelegram] = useState('')
    const [jenis_alamat, inputLinkedin] = useState('')
    const [jalan_nomor, inputFb] = useState('')
    const [status_alamat, inputTwitter] = useState('')
    const [kodepos, inputInstagram] = useState('')

    return (
        <div>DataAlamat</div>
    )
}

export default DataAlamat