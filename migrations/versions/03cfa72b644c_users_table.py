"""users table

Revision ID: 03cfa72b644c
Revises: 
Create Date: 2018-08-18 13:17:22.807777

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '03cfa72b644c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=35), nullable=True),
    sa.Column('last_name', sa.String(length=35), nullable=True),
    sa.Column('grade', sa.Integer(), nullable=True),
    sa.Column('track', sa.String(), nullable=True),
    sa.Column('homeroom', sa.String(length=6), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('role', sa.String(length=17), nullable=True),
    sa.Column('password_hash', sa.String(length=128), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('email_confirmation', sa.Boolean(), nullable=True),
    sa.Column('join_at', sa.DateTime(), nullable=True),
    sa.Column('last_seen', sa.DateTime(), nullable=True),
    sa.Column('token', sa.String(length=32), nullable=True),
    sa.Column('token_expiration', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    schema='officers'
    )
    op.create_index(op.f('ix_officers_users_email'), 'users', ['email'], unique=True, schema='officers')
    op.create_index(op.f('ix_officers_users_first_name'), 'users', ['first_name'], unique=False, schema='officers')
    op.create_index(op.f('ix_officers_users_grade'), 'users', ['grade'], unique=False, schema='officers')
    op.create_index(op.f('ix_officers_users_last_name'), 'users', ['last_name'], unique=False, schema='officers')
    op.create_index(op.f('ix_officers_users_role'), 'users', ['role'], unique=False, schema='officers')
    op.create_index(op.f('ix_officers_users_token'), 'users', ['token'], unique=True, schema='officers')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_officers_users_token'), table_name='users', schema='officers')
    op.drop_index(op.f('ix_officers_users_role'), table_name='users', schema='officers')
    op.drop_index(op.f('ix_officers_users_last_name'), table_name='users', schema='officers')
    op.drop_index(op.f('ix_officers_users_grade'), table_name='users', schema='officers')
    op.drop_index(op.f('ix_officers_users_first_name'), table_name='users', schema='officers')
    op.drop_index(op.f('ix_officers_users_email'), table_name='users', schema='officers')
    op.drop_table('users', schema='officers')
    # ### end Alembic commands ###