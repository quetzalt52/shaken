import React from "react";

const LogIn = React.createClass ({
  render() {
    return (
      <div className="Modal">
				<form
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<Input
						id="name"
						type="text"
						placeholder="Name" />
					<Input
						id="username"
						type="email"
						placeholder="someemail@domain.com" />
					<Input
						id="password"
						type="password"
						placeholder="password" />
					<button>
						Log in <i className="not-ready"></i>
					</button>
				</form>
			</div>
    );
  }
});
