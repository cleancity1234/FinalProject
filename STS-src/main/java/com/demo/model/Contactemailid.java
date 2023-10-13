package com.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Contactemailid
{

	@Id
	private String email;
	private String name;
	private int number;
	private String feedback;
	public Contactemailid() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Contactemailid(String email, String name, int number, String feedback) {
		super();
		this.email = email;
		this.name = name;
		this.number = number;
		this.feedback = feedback;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	




}

	
