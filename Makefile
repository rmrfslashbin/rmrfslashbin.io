.DEFAULT_GOAL := run
.PHONY: deploy

run:
	hugo server -D

update:
	git submodule update --remote --merge

