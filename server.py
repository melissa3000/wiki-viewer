from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension



app = Flask(__name__)

# JOBS = [
#     "Software Engineer", "QA Engineer", "Product Engineer"]

# Required to use Flask sessions and the debug toolbar
app.secret_key = "ABC"


# YOUR ROUTES GO HERE

@app.route("/")
def index():
    """Return home page."""

    return render_template("index.html")


# @app.route("/application-form")
# def apply():
#     """Provides job application form"""

#     return render_template("application-form.html",
#                             JOBS=JOBS)

# @app.route("/application-response", methods=["POST"])
# def applied():
#     """Confirms application form submission"""

#     firstname = request.form.get("firstname")
#     lastname = request.form.get("lastname")
#     salary = request.form.get("salary")
#     job = request.form.get("job")

#     return render_template("application-response.html",
#                             firstname=firstname,
#                             lastname=lastname,
#                             salary=salary,
#                             job=job)


if __name__ == "__main__":
    # We have to set debug=True here, since it has to be True at the
    # point that we invoke the DebugToolbarExtension
    app.debug = True

    # Use the DebugToolbar
    DebugToolbarExtension(app)


    app.run(host="0.0.0.0")
