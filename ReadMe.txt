The database used is Postgres. To restore the database using the provided dump file, just create an empty database in Pgadmin, the run the following command:
psql -U postgres -d [Database name which will be overwritten] -f [Backup file]

If the postgres username and passwords do not match with username "postgres" and password "123", then you may need to change the database connection string in the backend .env file accordingly.
