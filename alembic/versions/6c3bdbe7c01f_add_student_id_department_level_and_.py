"""Add student_id, department, level, and profile_image to user table

Revision ID: 6c3bdbe7c01f
Revises: 1a2b3c4d5e6f  # Replace with the actual previous revision ID
Create Date: ...
"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6c3bdbe7c01f'
down_revision = '1a2b3c4d5e6f'  # Make sure this is correct!
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('user', sa.Column('student_id', sa.String(20), unique=True, nullable=True))
    op.add_column('user', sa.Column('department', sa.String(100), nullable=True))
    op.add_column('user', sa.Column('level', sa.String(10), nullable=True))
    op.add_column('user', sa.Column('profile_image', sa.String(200), nullable=True))


def downgrade():
    op.drop_column('user', 'profile_image')
    op.drop_column('user', 'level')
    op.drop_column('user', 'department')
    op.drop_column('user', 'student_id')

down_revision = None