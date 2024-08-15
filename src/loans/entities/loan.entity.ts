import { User } from "src/users/entities/user.entitty";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Loan{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;
    
    @Column({ default: 2 })
    interestRate: number;
    
    @Column({ default: true })
    status: boolean;
    
    @ManyToOne(() => User, (user) => user.loans)
    user: User;
}