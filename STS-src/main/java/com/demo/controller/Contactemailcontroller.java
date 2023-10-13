package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Contactemailid;

import com.demo.repository.Contactemailrepository;

@CrossOrigin(origins="localhost:4200")
@RestController
public class Contactemailcontroller 

{

	@Autowired
	
	private Contactemailrepository cemail;
	
	//services
	
		@CrossOrigin(origins="http://localhost:4200")
		@PostMapping("/insertemail")
		
		public Contactemailid insert(@RequestBody Contactemailid ca)
		{
			return this.cemail.save(ca);
		}
}
