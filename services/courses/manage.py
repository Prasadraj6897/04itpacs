#!/usr/bin/env python3

from flask.cli import FlaskGroup


from project.app import create_app, db
from project.api.models import COURSE

app = create_app()
cli = FlaskGroup(create_app=create_app)

@cli.command()
def recreatedb():

	db.drop_all()
	db.create_all()
	db.session.commit()

@cli.command()
def seeddb():

	db.session.add(COURSE(firstname='Tina', lastname='Prislan', email='tina.prislan@gmail.com', password='rakesh22'))
	db.session.add(COURSE(firstname='Ashwini', lastname='Rao', email='ashwini.rao@ikompass.com', password='rakesh22'))
	db.session.add(COURSE(firstname='Deepak', lastname='G.S', email='aditya@ikompass.com', password='rakesh22'))
	db.session.add(COURSE(firstname='Prasad', lastname='RRR', email='prasad@sugiinfotech.com', password='12345678'))
	db.session.commit()

if __name__ == '__main__':
	cli()