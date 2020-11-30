import React, {useState} from 'react';
// import {Button} from '../components/Button';
import axios from 'axios';

export function CreditApprove() {
   
    const [Approve, setApprove] = useState({
        name: "",
        phone: "",
        identityNo: "",
        salary: '',
        checkState: "",
        creditLimit: ''
    });

    const onInputChange = e => {
        setApprove({ ...Approve, [e.target.name]: e.target.value });
    };

    const handleSubmit = e  => {
        console.log(Approve);
       axios.post(`http://localhost:8080/application/save`, {
        headers: {
            'Content-Type': 'application/json'
        },
        Approve
    })
       .then(res => {
           if(res.data){
                const result = res.data;
                setApprove({result});
                console.log("res "+res);
                console.log("Approve"+Approve);
           }
           else {
               alert('Bir Hata Olustu.')
           }
          
       }) 
       alert(`Sayın ${Approve.name}, başvurunuzun sonucu:${Approve.checkState}` + Approve.creditLimit==null ? ``:`Kredi limitiniz ${Approve.creditLimit}dir.` );
    }
    
    return (
        <>
        {/* <Button>Kredi Al</Button> */}
        <form >
        <h1>Kredi Başvurusu</h1>
        <div>
                        <label>Ad ve Soyad</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={onInputChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Telefon Numarası</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            onChange={onInputChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Kimlik Numarası</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="identityNo"
                            name="identityNo"
                            onChange={onInputChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Salary</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="salary"
                            name="salary"
                            onChange={onInputChange}
                        />
                    </div>
                    <button type = "button" onClick={handleSubmit}>Başvur</button>
        </form>
        
        </>
    )
}