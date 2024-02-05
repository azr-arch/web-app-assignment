"use client";

import { AddForm } from "@/components/form/add-form";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { UserRoundPlus } from "lucide-react";

export const AddUser = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button size="sm" variant={"outline"} className="ml-auto mr-2">
                    <UserRoundPlus className="w-4 h-4 mr-2" />
                    <p className="text-sm">Add a friend</p>
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <AddForm />
            </PopoverContent>
        </Popover>
    );
};
