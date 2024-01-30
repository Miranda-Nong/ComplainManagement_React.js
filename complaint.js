
import React, { useState, useEffect } from "react";
import imgURL3 from './components/bel_logo.jpeg'
import "./com.css";
import {
	Button,
	DatePicker,
	Form,
	Input, Radio,
	Card
} from 'antd'
import { json } from "react-router-dom";
import { resetWarned } from "antd/es/_util/warning";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function App() {
	const [form] = Form.useForm();
 const [formData , setFormData] = React.useState({});
 const [ formsData , setFormsData] = React.useState([]);
	

	const [Data, setData] = useState([]);
	const [newData, setnewData] = useState({
		Name: 'name',
		Address: 'Add',
		ComplainType:'radio',
		Date: 'date', Location: 'Loc',
		Complain: 'complain',
		Sign: 'Sign'
	});

	const [selectColor, setSelectColor]=useState('');
	const [RadioOptions, setRadioOptions] = useState({
		key: 'Minor',
		key: 'Major',
		key: 'Critical'
	});

	
	useEffect(() => {
		localStorage.setItem('Data', JSON.stringify([{}]));
	}, [])

	const onSubmit = () =>{
		form.validateFields().then((value)=>{
			const arradata =JSON.parse(localStorage.getItem('Data')) ;
			console.log(arradata)
			const result = [...arradata,value];
			localStorage.setItem('Data',JSON.stringify(result) );
			alert("your complaint is submitted");
			form.resetFields('');

		
		})

	}
	return (
		<>
			<div className="app">
				<div className="head">
					<span className='logo'><img src={imgURL3} /></span>
					<div className='dib'><a href="/login" className='ad'>Home</a></div>

					<div className='dib'><a href="/comdata" className='ad'>User Login</a></div>
					<div className='dib'><a href="/contact" className='ad'>Contact Us</a></div>
					<div className='dib'><a href="#" className='ad'>Settings</a>

					</div>
				</div>
				
				<Card title="Complaint form" style={{ width: '500px', background: '#fff5f5', margin: 'auto' }}>
					<Form
					form = {form}
						variant="filled"
						style={{
							maxWidth: 600,
						}}
					>
						<Form.Item
							label="Name"
							name="name"
							rules={[
								{
									required: true,
									message: 'Please input!',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Address"
							name="Address"
							rules={[
								{
									required: true,
									message: 'Please input!',
								},
							]}
						>
							
							<Input />
						</Form.Item>
						
						<Form.Item label="Complain Type"
						name="radio"
						
						>
         				 <Radio.Group 
						  value={selectColor}>
           					 <Radio  key='Minor' value="Minor"> Minor </Radio>
								<Radio  key='Major' value="Major"> Major </Radio>
          					  <Radio key='Critical' value="Critical"> Critical </Radio>
          				</Radio.Group>

      				  </Form.Item>

						<Form.Item 
						label="Date of Incident"
						name="Date"
						rules={[
							{
								required: true,
								message: 'Please input!',
							},
						]}>
          					<DatePicker />
        				</Form.Item>

						<Form.Item
							label="Location of incident"
							name="Location"
							rules={[
								{
									required: true,
									message: 'Please input!',
								},
							]}
						>
							<Input />
						</Form.Item>
						
						<Form.Item label="Write your complain"
						name="Complain"
						rules={[
							{
								required: true,
								message: 'Please input!',
							},
						]}>
         					 <TextArea rows={4} />
       					</Form.Item>
					

						   <Form.Item label="Signature"
						name="Sign"
						><Input />
         					 
       					</Form.Item>
					
						<Form.Item
							name="submit" >
						<Button type="primary" htmlType="submit" onClick={onSubmit}>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Card >
		</div >
		</>
	)

}

export default App;

