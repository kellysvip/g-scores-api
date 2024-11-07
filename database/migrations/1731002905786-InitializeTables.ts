import { MigrationInterface, QueryRunner } from "typeorm";

export class InitializeTables1731002905786 implements MigrationInterface {
    name = 'InitializeTables1731002905786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "math" double precision, "literature" double precision, "foreign_language" double precision, "physics" double precision, "chemistry" double precision, "biology" double precision, "history" double precision, "geography" double precision, "civic_education" double precision, "foreign_language_code" character varying(2), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "students"`);
    }

}
