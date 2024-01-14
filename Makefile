.DEFAULT_GOAL := run
.PHONY: deploy

run:
	hugo server -D

deploy:
	./deploy

update:
	git submodule update --remote && git commit -am "Updating submodules" && git push