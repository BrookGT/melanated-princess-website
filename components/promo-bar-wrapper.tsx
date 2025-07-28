"use client";
import { useState } from "react";
import PromoBar from "@/components/promo-bar";

export default function PromoBarWrapper() {
    const [promoVisible, setPromoVisible] = useState(true);

    return (
        <>
            <PromoBar
                isVisible={promoVisible}
                onClose={() => setPromoVisible(false)}
            />
            {!promoVisible && (
                <div className="bg-white w-full h-[56px] lg:h-[80px]">
                    {/* Responsive placeholder: 56px for mobile, 80px for large screens */}
                    <style jsx>{`
                        @media (min-width: 1024px) {
                            div[style] {
                                height: 80px !important;
                            }
                        }
                    `}</style>
                </div>
            )}
        </>
    );
}
