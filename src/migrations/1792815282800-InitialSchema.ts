import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1792815282800 implements MigrationInterface {
    name = 'InitialSchema1792815282800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "WATER_REPORT" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "description" text NOT NULL, "severity" character varying NOT NULL, "phone" character varying NOT NULL, "photo_url" character varying NOT NULL, "repair_photo_url" character varying, CONSTRAINT "PK_b232cdd6d3e95978564720c2ebe" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "WATER_REPORT"`);
    }

}
