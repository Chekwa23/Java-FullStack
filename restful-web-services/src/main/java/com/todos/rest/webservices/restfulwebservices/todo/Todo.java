package com.todos.rest.webservices.restfulwebservices.todo;

import java.util.Date;

public class Todo {

	private long id;
	private String username;
	private String description;
	private Date dueDate;
	private boolean done;

	public Todo() {
		
	}
	
	public Todo(long id, String username, String description, Date dueDate, boolean done) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.dueDate = dueDate;
		this.done = done;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDeadline() {
		return dueDate;
	}

	public void setDeadline(Date dueDate) {
		this.dueDate = dueDate;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

}
