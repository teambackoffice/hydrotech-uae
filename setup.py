from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in hydrotech_uae/__init__.py
from hydrotech_uae import __version__ as version

setup(
	name="hydrotech_uae",
	version=version,
	description="Hydrotech UAE Customization",
	author="sammish",
	author_email="it@hydrotechglobal.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
