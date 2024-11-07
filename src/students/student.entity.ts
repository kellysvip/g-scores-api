import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {
    IsOptional,
    Min,
    IsNumber,
    Max,
    IsUUID,
    Matches,
    IsInt,
} from 'class-validator';

import { EntityName } from '../constants/enums/entity-name.enum';
import { DateTransformer } from '../constants/transformers/date.transformer';
import { IsTrimmedStringWithoutTab } from '../constants/validators/trimmed-string-without-tab.validator';

@Entity(EntityName.STUDENTS)
export class StudentEntity {
    @PrimaryGeneratedColumn()
    @IsOptional()
    @IsInt()
    id!: number; 

    @Column({
        nullable: true,
        name: 'math',
        type: 'double precision',
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    math: number;

    @Column({
        nullable: true,
        name: 'literature',
        type: 'double precision',
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    literature: number;

    @Column({
        nullable: true,
        name: 'foreign_language',
        type: 'double precision',
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    foreignLanguage: number;

    @Column({
        nullable: true,
        name: 'physics',
        type: 'double precision',
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    physics: number;

    @Column({
        nullable: true,
        name: 'chemistry',
        type: 'double precision',
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    chemistry: number;

    @Column({
        nullable: true,
        name: 'biology',
        type: 'double precision',
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    biology: number;

    @Column({
        nullable: true,
        name: 'history',
        type: 'double precision',
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    history: number;

    @Column({
        nullable: true,
        name: 'geography',
        type: 'double precision',
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    geography: number;

    @Column({
        nullable: true,
        name: 'civic_education',
        type: 'double precision',
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    civicEducation: number;

    @Column({
        nullable: true,
        name: 'foreign_language_code',
        type: 'varchar',
        length: 2,
    })
    @IsOptional()
    @IsTrimmedStringWithoutTab()
    @Matches(/^(N[1-7])$/)
    foreignLanguageCode: string;

    @CreateDateColumn({
        name: 'created_at',
        transformer: new DateTransformer(),
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        transformer: new DateTransformer(),
    })
    updatedAt: Date;
}