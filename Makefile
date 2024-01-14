.DEFAULT_GOAL := deploy
.PHONY: deploy

deploy:
	./deploy

update:
	git submodule update --remote && git commit -am "Updating submodules" && git push