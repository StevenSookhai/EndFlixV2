"""merging two heads

Revision ID: a12b08a13b01
Revises: 3c4c36fc7882, 31b347751dde
Create Date: 2023-04-27 19:40:03.994758

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a12b08a13b01'
down_revision = ('3c4c36fc7882', '31b347751dde')
branch_labels = None
depends_on = None


def upgrade():
    pass


def downgrade():
    pass
