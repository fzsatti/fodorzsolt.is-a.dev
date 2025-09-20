dev:
	docker-compose up app
stop:
	docker-compose down
bash:
	docker-compose exec app bash
build:
	docker-compose run build
install:
	docker-compose run install
deploy:
	cd ../fodorzsolt.is-a.dev/; rm -Rv $(shell ls ../fodorzsolt.is-a.dev | grep -Ev '^(CNAME|.nojekyll|.git|.idea)$$')
	cp -TRf out/ ../fodorzsolt.is-a.dev/
	cd ../fodorzsolt.is-a.dev/; git add .
	cd ../fodorzsolt.is-a.dev/; git commit -m "New updates"
	cd ../fodorzsolt.is-a.dev/; git push origin main


